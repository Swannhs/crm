import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Web Builder Editor',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <BuilderWorkspaceView mode="webbuilder-editor" id={params.id} />;
}
