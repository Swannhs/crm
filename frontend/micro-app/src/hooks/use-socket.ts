import { useEffect, useRef } from 'react';
import { socketClient } from 'src/utils/socket';

export function useSocket(orgId?: string, onEvent?: (event: string, data: any) => void) {
  const onEventRef = useRef(onEvent);
  onEventRef.current = onEvent;

  useEffect(() => {
    if (!orgId) return;

    // For now we use a dummy token or get it from auth state
    const token = localStorage.getItem('accessToken') || '';
    const socket = socketClient.connect(token, orgId);

    const handleAny = (event: string, ...args: any[]) => {
      onEventRef.current?.(event, args[0]);
    };

    socket.onAny(handleAny);

    return () => {
      socket.offAny(handleAny);
    };
  }, [orgId]);

  return socketClient.getSocket();
}
