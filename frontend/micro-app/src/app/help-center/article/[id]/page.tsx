import { HelpCenterPublicView } from 'src/sections/public/help-center-public-view';

export const metadata = {
  title: 'Help Center Article',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <HelpCenterPublicView id={params.id} />;
}
