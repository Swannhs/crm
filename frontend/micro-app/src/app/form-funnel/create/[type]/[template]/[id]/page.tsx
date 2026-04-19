import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Create Form Funnel',
};

type Props = {
  params: {
    type: string;
    template: string;
    id: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <BuilderWorkspaceView
      mode="form-create"
      type={params.type}
      template={params.template}
      id={params.id}
    />
  );
}
