import connectDB from "@/lib/connectDB";
import ProjectModel from "@/model/ProjectModel";


export async function POST(request) {
    await connectDB();

    const body = await request.json();
    const { title, about, description, image, github, live, technologies } = body;

    try {

        const isProjectExist = await ProjectModel.findOne({title});
        if(isProjectExist){
            return new Response(JSON.stringify(
                {
                    success: false,
                    message: "Project already exist"
                },
                { status: 400 }
            ));
        }
        if(!title || !about || !description || !image || !github || !live || !technologies) {
            return new Response(JSON.stringify(
                {
                    success: false,
                    message: "All fields are required"
                },
                { status: 400 }
            ));
        }
        const addNewProject = await ProjectModel.create(body);
     
        if (!addNewProject) return new Response(JSON.stringify(
            {
                success: false,
                message: "Project was not uploaded"
            },
            { status: 500 }
        ));
  
        if(addNewProject){
            return new Response(JSON.stringify(
                {
                    success: true,
                    message: "Project was uploaded successfully"
                },
                { status: 200 }
            ));
        }
 
    } catch (error) {
        console.log(error);
        return new Response({ success: false, message: error }, { status: 500 });
    }
}