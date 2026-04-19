import { DocumentWorkspaceView } from 'src/sections/documents/view/document-workspace-view';

export const metadata = {
  title: 'Document Preview',
};

type Props = {
  params: {
    hashcode: string;
  };
};

export default function Page({ params }: Props) {
  return <DocumentWorkspaceView mode="preview" hashcode={params.hashcode} />;
}
