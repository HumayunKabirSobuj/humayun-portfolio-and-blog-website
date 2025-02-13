import { getAllProject } from "@/app/utils/actions/projectManagement";
import ProjectUpdateFrom from "@/components/shared/ProjectUpdateForm";
import { TProject } from "@/types/types";

const UpdateProject = async ({ params }: { params: { projectId: string } }) => {
    
  // console.log(await params);

  const projects = await getAllProject();
  // console.log(blogs?.data);

  const matchProject = projects?.data?.find(
    (project: TProject) => project._id === params.projectId
  );

//   console.log(matchProject);
  return (
    <div>
      <ProjectUpdateFrom projectData={matchProject} />
    </div>
  );
};

export default UpdateProject;
