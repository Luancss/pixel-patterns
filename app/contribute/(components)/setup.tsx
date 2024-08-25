import CopyCard from "@/components/copy";
import { Button } from "@/components/ui/button";
import React from "react";
import Started from "./started";
import Image from "next/image";

const Setup = () => {
  return (
    <>
      <h2 className="text-5xl font-bold text-gray-100 mb-11">Setup</h2>
      <p className="text-base text-gray-300 my-4">
        1. <span className="font-bold text-blue-500">Fork the Repository</span>:
        Click the "Fork" button on the repository page to create a copy of the
        project in your GitHub account.
      </p>
      <p className="text-base text-gray-300 my-4">
        2. <span className="font-bold text-blue-500">Clone the Repository</span>
        : Clone the forked repository to your local machine using the command:
      </p>
      <div className="md:ml-8">
        <CopyCard text="git clone https://github.com/Luancss/pixel-patterns" />
      </div>
      <p className="text-base text-gray-300 my-4">
        3. <span className="font-bold text-blue-500">Create a New Branch</span>:
        Create a branch to make your changes. Give it a name that clearly
        describes what you’re working on:
      </p>
      <div className="md:ml-8">
        <CopyCard text="git checkout -b my-feature" />
      </div>
      <p className="text-base text-gray-300 my-4">
        4. <span className="font-bold text-blue-500">Make Your Changes</span>:
        Implement the necessary changes in the code, add new features, fix bugs,
        or improve the documentation.
      </p>
      <p className="text-base text-gray-300 mt-10">
        To acess a components folder, go to{" "}
        <span className="font-bold text-green-500">
          app/your component/component/card-components.tsx
        </span>{" "}
        Within the card array, place the card you want to add below all the
        others.
      </p>
      <p className="text-base text-gray-300 my-4">Example:</p>
      <Image
        className="mt-4"
        src="/structure.png"
        alt="card"
        width={300}
        height={300}
      />
      <Started />
      <p className="text-base text-gray-300 my-4">
        5. <span className="font-bold text-blue-500">Commit Your Changes</span>:
        After completing your changes, commit them with a clear and descriptive
        message:
      </p>
      <div className="md:ml-8">
        <CopyCard
          text="git add ."
          text2='git commit -m "Add new feature for XYZ"'
        />
      </div>
      <p className="text-base text-gray-300 my-4">
        6.{" "}
        <span className="font-bold text-blue-500">
          Push Your Changes to GitHub
        </span>
        : Push your changes to your repository on GitHub:
      </p>
      <div className="md:ml-8">
        <CopyCard text="git push origin my-feature" />
      </div>
      <p className="text-base text-gray-300 my-4">
        7. <span className="font-bold text-blue-500">Open a Pull Request</span>:
        GoGo back to the original repository and click "New Pull Request."
        Describe the changes you’ve made and why. This allows your adjustments
        to be reviewed and, if approved, merged into the main project.
      </p>
      <p className="text-base text-gray-300 my-4">
        8. <span className="font-bold text-blue-500">Wait for Review</span>: Our
        team will review your contribution. If everything looks good, your
        contribution will be merged into the project. If any changes are needed,
        we’ll provide feedback so you can make adjustments.
      </p>
    </>
  );
};

export default Setup;
