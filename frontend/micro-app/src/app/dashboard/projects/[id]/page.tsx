import { ProjectDetailsView } from 'src/sections/projects/view/project-details-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Project Details - Dashboard` };

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  return <ProjectDetailsView id={id} />;
}
