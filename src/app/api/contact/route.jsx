export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    console.log({
      name,
      email,
      message,
    });

    return Response.json({
      success: true,
      message: "Message received successfully.",
    });

  } catch (error) {

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );

  }
}