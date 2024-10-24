# Angular To-Do List Application

This repository contains a simple **To-Do List** application built with **Angular**. The application allows users to manage their tasks by adding, deleting, and marking them as reminders. It is a great example of basic CRUD operations and Angular component-based architecture.

## Features

- **Add Tasks**: Users can add new tasks to their to-do list with a title and optional reminder.
- **Delete Tasks**: Users can delete tasks from the list when they are no longer needed.
- **Toggle Reminders**: Users can mark tasks with reminders to highlight important tasks that need attention.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Application Structure

- **Components**:
  - `about`: Displays Task Tracker's about.
  - `add-task`: Displays form to create task, where possible to set name, date and reminder.
  - `button`: Custom button.
  - `footer`: Displays Task Tracker's footer.
  - `header`: Displays Task Tracker's header.
  - `tasks`: Displays all tasks.
  - `tasks-item`: Display task info.
    
- **Services**:
  - `task`: Manages the tasks' state, including adding, deleting. It also handles communication with a potential backend API.
  - `ui`: Manages the reminders' state localy.

- **Models**:
  - `mock-tasks`: Defines the structure of a task with properties: `id`, `text` as title,`day` and `reminder`.

## How to Run

1. **Clone the repository**:

    ```bash
    git clone https://github.com/dominikkorwek/Angular-project.git
    cd Angular-project
    ```

2. **Install dependencies**:

    Make sure you have Node.js and Angular CLI installed. Then, install the project       dependencies:

    ```bash
    npm install
    ```

3. **Run the application**:

    Start the Angular development server:

    ```bash
    ng serve
    ```

    The application will be available at `http://localhost:4200`.

4. **Connect with backend**

    By default backend Url is set as apiUrl with value `http://localhost:5000/tasks`.
    It can be changed in `task.service.ts` in `services`. 

## Usage

- **Adding a Task**: Use the input field at the top of the application to add a new task. Optionally, you can set a reminder for the task.
- **Deleting a Task**: Click the delete icon next to a task to remove it from the list.
- **Toggling a Reminder**: Click on the task itself to toggle the reminder setting, which will highlight the task.

## Contributing

Contributions are welcome! If you'd like to add new features, improve existing code, or fix bugs, feel free to fork the repository and submit a pull request. Please ensure your code is well-documented and follows the project's coding standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

This project is maintained by **Dominik Korwek**. If you have any questions, suggestions, or feedback, feel free to reach out.

---

Thank you for exploring this Angular To-Do List application!
