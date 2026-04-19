import { DocumentWorkspaceView } from 'src/sections/documents/view/document-workspace-view';

export const metadata = {
  title: 'Dashboard: Document Folder',
};

type Props = {
  params: {
    folder: string;
  };
};

export default function Page({ params }: Props) {
  return <DocumentWorkspaceView folder={params.folder} />;
}
