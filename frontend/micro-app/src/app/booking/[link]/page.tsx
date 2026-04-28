import { PublicBookingView } from 'src/sections/booking/view/public-booking-view';

export const metadata = {
  title: 'Booking',
};

type Props = {
  params: {
    link: string;
  };
};

export default function Page({ params }: Props) {
  return <PublicBookingView link={params.link} />;
}

