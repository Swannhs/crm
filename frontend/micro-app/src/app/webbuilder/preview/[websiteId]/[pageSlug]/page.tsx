import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Website Preview Page',
};

type Props = {
  params: {
    websiteId: string;
    pageSlug: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <BuilderWorkspaceView
      mode="webbuilder-preview"
      websiteId={params.websiteId}
      pageSlug={params.pageSlug}
    />
  );
}
