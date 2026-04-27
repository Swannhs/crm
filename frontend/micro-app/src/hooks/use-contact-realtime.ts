import { useState, useEffect } from 'react';
import { useSocket } from './use-socket';
import { useQueryClient } from '@tanstack/react-query';

// Mock user info for now, should be replaced with actual auth state
const USER_ID = 'user-123';
const USER_NAME = 'Swann';

export function useContactRealtime(contactId: string, orgId: string) {
  const socket = useSocket(orgId);
  const queryClient = useQueryClient();
  const [activeUsers, setActiveUsers] = useState<any[]>([]);

  useEffect(() => {
    if (!socket || !contactId) return;

    // Join the contact room
    socket.emit('join-contact', {
      contactId,
      userId: USER_ID,
      userName: USER_NAME,
    });

    // Listen for presence events
    const handlePresence = (data: any) => {
      if (data.contactId === contactId) {
        setActiveUsers((current) => {
          const exists = current.find((u) => u.userId === data.userId);
          if (exists) {
            return current.map((u) => (u.userId === data.userId ? data : u));
          }
          return [...current, data];
        });
      }
    };

    // Listen for updates
    const handleUpdated = (data: any) => {
      if (data.contactId === contactId) {
        // Invalidate query to refetch fresh data from Odoo
        queryClient.invalidateQueries({ queryKey: ['contact', contactId] });
      }
    };

    socket.on('contact:presence', handlePresence);
    socket.on('contact:updated', handleUpdated);

    return () => {
      socket.off('contact:presence', handlePresence);
      socket.off('contact:updated', handleUpdated);
    };
  }, [socket, contactId, queryClient]);

  const notifyEditing = () => {
    if (socket && contactId) {
      socket.emit('contact:editing', {
        contactId,
        userId: USER_ID,
        userName: USER_NAME,
      });
    }
  };

  const notifyUpdate = (updates: any) => {
    if (socket && contactId) {
      socket.emit('contact:update', {
        contactId,
        userId: USER_ID,
        updates,
      });
    }
  };

  return {
    activeUsers,
    notifyEditing,
    notifyUpdate,
  };
}
