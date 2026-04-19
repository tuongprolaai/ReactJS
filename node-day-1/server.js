import { createServer } from "node:http";

// DB in memory
let taskId = 1;
const db = {
    tasks: [
        {
            id: 1,
            title: "Quet nha",
        },
    ],
};

function serverResponse(res, data) {
    res.writeHead(data.status, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify(data));
}

const server = createServer((req, res) => {
    let response = {
        status: 200,
    };

    // [GET] /api/tasks
    if (req.method === "GET" && req.url === "/api/tasks") {
        response.data = db.tasks;
        return serverResponse(res, response);
    }

    // [GET] /api/tasks/:id
    if (req.method === "GET" && req.url.startsWith("/api/tasks/")) {
        const id = +req.url.split("/").pop();
        const task = db.tasks.find((_task) => _task.id === id);
        if (task) {
            response.data = task;
        } else {
            response.status = 404;
            response.message = "Resource not found.";
        }
        return serverResponse(res, response);
    }

    // [POST] /api/tasks
    if (req.method === "POST" && req.url === "/api/tasks") {
        let body = "";
        req.on("data", (buffer) => {
            body += buffer.toString();
        });
        req.on("end", () => {
            const payload = JSON.parse(body);
            const newTask = {
                id: taskId++,
                title: payload.title,
                isCompleted: false,
            };
            db.tasks.push(newTask);

            response.status = 201;
            response.data = newTask;
            serverResponse(res, response);
        });
        return;
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening on 127.0.0.1:3000");
});
