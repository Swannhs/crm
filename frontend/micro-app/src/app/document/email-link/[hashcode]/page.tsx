import { DocumentWorkspaceView } from 'src/sections/documents/view/document-workspace-view';

export const metadata = {
  title: 'Document Recipient Access',
};

type Props = {
  params: {
    hashcode: string;
  };
};

export default function Page({ params }: Props) {
  return <DocumentWorkspaceView mode="email-link" hashcode={params.hashcode} />;
}
