import connectDB from "@/lib/connectDB";
import ProjectModel from "@/model/ProjectModel";

console.log(ProjectModel)
export async function POST(request) {
    await connectDB();

    const body = await request.json();
    const { title } = body;

    console.log(body)
    try {
        const addNewProject = await ProjectModel.create(body);
        console.log(addNewProject);

        if (!addNewProject) return new Response({ success: false, message: "Project was not uploaded" }, { status: 500 });

        return new Response({ success: true, message: "Project was uploaded successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response({ success: false, message: error }, { status: 500 });
    }
}