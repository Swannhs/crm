import { DocumentWorkspaceView } from 'src/sections/documents/view/document-workspace-view';

export const metadata = {
  title: 'Dashboard: Create Document',
};

type Props = {
  params: {
    template: string;
    type: string;
  };
};

export default function Page({ params }: Props) {
  return <DocumentWorkspaceView mode="create" template={params.template} type={params.type} />;
}
