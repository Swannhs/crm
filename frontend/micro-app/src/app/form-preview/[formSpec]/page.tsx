import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Form Preview',
};

type Props = {
  params: {
    formSpec: string;
  };
};

export default function Page({ params }: Props) {
  const [id, rawPath] = params.formSpec.split('&path=');

  return <BuilderWorkspaceView mode="form-preview" id={id} previewPath={rawPath || 'default'} />;
}
