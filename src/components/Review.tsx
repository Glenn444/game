import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { FaThumbsUp,FaThumbsDown  } from "react-icons/fa";

// Initialize Supabase client - you'll need to replace these with your own values
const supabaseUrl = 'https://tvvxoveoblqawijmyuxo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2dnhvdmVvYmxxYXdpam15dXhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3ODAyNTQsImV4cCI6MjA2MDM1NjI1NH0.gzPjBbkFA4b5A8ZKo7_-kiFxHVAFRiTWDyQ1VbnJNNw';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SupabaseFeedbackSystem = ({ contentId = 'default-content' }) => {
  const [userVote, setUserVote] = useState(null); // 'up', 'down', or null
  const [score, setScore] = useState(0); // Single counter for votes
  const [isLoading, setIsLoading] = useState(true);
  const [fingerprint, setFingerprint] = useState('');
  
  // Generate fingerprint using FingerprintJS
  useEffect(() => {
    const generateFingerprint = async () => {
      try {
        // Initialize the FingerprintJS agent
        const fp = await FingerprintJS.load();
        
        // Get the visitor identifier
        const { visitorId } = await fp.get();
        
        // Set the fingerprint
        setFingerprint(visitorId);
      } catch (error) {
        console.error('Error generating fingerprint:', error);
        // Fallback to a simple fingerprint as backup
        const fallbackId = `fallback-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
        setFingerprint(fallbackId);
      }
    };
    
    generateFingerprint();
  }, []);
  
  // Fetch existing data and subscribe to real-time updates
  useEffect(() => {
    if (!fingerprint) return;
    
    const fetchExistingData = async () => {
      setIsLoading(true);
      
      // Get the content's current score
      const { data: contentData, error: contentError } = await supabase
        .from('content_scores')
        .select('score')
        .eq('content_id', contentId)
        .single();
      
      if (contentError && contentError.code !== 'PGRST116') { // PGRST116 is "row not found"
        console.error('Error fetching content score:', contentError);
      }
      
      // If content score exists, use it
      if (contentData) {
        setScore(contentData.score);
      } else {
        // Initialize content score if it doesn't exist
        await supabase
          .from('content_scores')
          .insert([{ content_id: contentId, score: 0 }])
          .select();
      }
      
      // Check if user has already voted
      const { data: userVoteData } = await supabase
        .from('user_votes')
        .select('vote')
        .eq('fingerprint', fingerprint)
        .eq('content_id', contentId)
        .single();
      
      if (userVoteData) {
        setUserVote(userVoteData.vote);
      }
      
      setIsLoading(false);
    };
    
    fetchExistingData();
    
    // Subscribe to realtime changes on content scores
    const subscription = supabase
      .channel('content_scores_changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'content_scores',
        filter: `content_id=eq.${contentId}`
      }, payload => {
        // Update score when it changes
        setScore(payload.new.score);
      })
      .subscribe();
    
    return () => {
      supabase.removeChannel(subscription);
    };
  }, [contentId, fingerprint]);
  
  const handleVote = async (vote) => {
    if (!fingerprint) return;
    
    // If user is clicking the same button they already selected, do nothing
    if (userVote === vote) return;
    
    try {
      // Begin a transaction using Supabase functions
      const { error: fnError } = await supabase.rpc('handle_vote', {
        p_content_id: contentId,
        p_fingerprint: fingerprint,
        p_vote: vote,
        p_previous_vote: userVote
      });
      
      if (fnError) throw fnError;
      
      // Update local state (will be confirmed by real-time subscription)
      setUserVote(vote);
      
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center p-4">Loading feedback...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 mt-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 ">Do you like the Game?</h2>
      
     
      
      <div className="flex space-x-6">
        <button
          onClick={() => handleVote('up')}
          className={`flex flex-col items-center p-3 ${
            userVote === 'up' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-white text-gray-700 hover:bg-green-50'
          } rounded-lg transition-colors duration-200`}
        >
          <FaThumbsUp className='w-6 h-6'/>
          <span className="mt-1">{score > 0 ? score : ''}</span>
        </button>
        
        <button
          onClick={() => handleVote('down')}
          className={`flex flex-col items-center p-3 ${
            userVote === 'down' 
              ? 'bg-red-100 text-red-700' 
              : 'bg-white text-gray-700 hover:bg-red-50'
          } rounded-lg transition-colors duration-200`}
        >
          <FaThumbsDown className='w-6 h-6'/>
          <span className="mt-1">{score < 0 ? score * -1 : ''}</span>
        </button>
      </div>
      
      {userVote && (
        <div className=" text-gray-600">
          Thank you for your feedback!
        </div>
      )}
    </div>
  );
};

export default SupabaseFeedbackSystem;