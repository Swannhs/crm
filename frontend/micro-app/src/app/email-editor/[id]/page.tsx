import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Email Editor Detail',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <BuilderWorkspaceView mode="email-editor" id={params.id} />;
}
