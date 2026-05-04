import { useRef, useState, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';

// ----------------------------------------------------------------------

export function useCalendar() {
  const calendarRef = useRef<FullCalendar>(null);

  const [date, setDate] = useState<Date>(new Date());

  const [view, setView] = useState('dayGridMonth');

  const onNextDate = useCallback(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  }, []);

  const onPrevDate = useCallback(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  }, []);

  const onToday = useCallback(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  }, []);

  const onChangeView = useCallback((newView: string) => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.changeView(newView);
      setView(newView);
    }
  }, []);

  return {
    calendarRef,
    //
    date,
    view,
    //
    onNextDate,
    onPrevDate,
    onToday,
    onChangeView,
  };
}
