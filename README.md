# GCP Exam Emulator

A web-based exam emulator designed to mimic the look and feel of Kryterion's Webassessor for Google Cloud Platform exams.

## Features

- **Exam Selection**: Choose from multiple available exams (currently "Cloud Digital Leader" is implemented).
- **Exam Interface**: Realistic exam environment with a timer, progress bar, and navigation.
- **Question Types**: Supports single-select and multi-select questions.
- **Responsive Design**: Built with React and Tailwind CSS for a modern, responsive layout.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/zapitaluk/gcp-exam-emulator.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd gcp-exam-emulator
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.
