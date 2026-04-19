import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Preview Form',
};

type Props = {
  params: {
    formId: string;
    formPageId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <PublicFlowWorkspaceView
      mode="preview-form"
      formId={params.formId}
      formPageId={params.formPageId}
    />
  );
}
