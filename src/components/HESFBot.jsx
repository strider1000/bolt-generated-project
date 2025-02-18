import React, { useEffect, useState } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const RegulatorBot = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const chatInstance = createChat({
        webhookUrl: 'https://primary-production-d003.up.railway.app/webhook/e9325791-143d-4aea-be69-160d6bbf9653/chat',
        mode: 'fullscreen',
        target: '#n8n-chat',
        showWelcomeScreen: true,
        initialMessages: [
          'Hi there! 👋',
          'I can help you with any regulatory compliance questions and guidance relating to the HESF 2021.'
        ],
        i18n: {
          en: {
            title: 'Regulator Bot',
            subtitle: 'Your AI assistant for regulatory compliance.',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your message...',
          },
        },
        webhookConfig: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      });

      // Cleanup on unmount
      return () => {
        if (chatInstance && typeof chatInstance.destroy === 'function') {
          chatInstance.destroy();
        }
      };
    } catch (err) {
      console.error('Failed to initialize chat:', err);
      setError(err.message);
    }
  }, []);

  if (error) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red'
      }}>
        Error loading chat: {error}
      </div>
    );
  }

  return (
    <div 
      id="n8n-chat" 
      style={{ 
        width: '100%', 
        height: '100vh',
        margin: 0,
        padding: 0,
        background: '#f5f5f5'
      }}
    />
  );
};

export default RegulatorBot;
