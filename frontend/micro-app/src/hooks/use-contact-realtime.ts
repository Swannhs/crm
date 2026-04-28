import { useState, useEffect } from 'react';
import { useSocket } from './use-socket';
import { useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from 'src/auth/hooks';

export function useContactRealtime(contactId: string, orgId: string) {
  const socket = useSocket(orgId);
  const queryClient = useQueryClient();
  const { user } = useAuthContext();
  const [activeUsers, setActiveUsers] = useState<any[]>([]);
  const userId = user?.id ? String(user.id) : '';
  const userName = (user?.fullName || user?.username || user?.email || '').trim();

  useEffect(() => {
    if (!socket || !contactId || !userId || !userName) return;

    // Join the contact room
    socket.emit('join-contact', {
      contactId,
      userId,
      userName,
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
  }, [socket, contactId, queryClient, userId, userName]);

  const notifyEditing = () => {
    if (socket && contactId && userId && userName) {
      socket.emit('contact:editing', {
        contactId,
        userId,
        userName,
      });
    }
  };

  const notifyUpdate = (updates: any) => {
    if (socket && contactId && userId && userName) {
      socket.emit('contact:update', {
        contactId,
        userId,
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
