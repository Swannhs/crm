import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Website Preview',
};

type Props = {
  params: {
    websiteId: string;
  };
};

export default function Page({ params }: Props) {
  return <BuilderWorkspaceView mode="webbuilder-preview" websiteId={params.websiteId} />;
}
