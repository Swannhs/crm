import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Web Builder Create Type',
};

type Props = {
  params: {
    type: string;
  };
};

export default function Page({ params }: Props) {
  return <BuilderWorkspaceView mode="webbuilder-create" type={params.type} />;
}
