import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Form Submitted',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <BuilderWorkspaceView mode="form-submitted" id={params.id} />;
}
