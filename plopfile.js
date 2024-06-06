const prompts = [
  {
    type: "input",
    name: "env",
    message: "Enter app Env for deployment",
  },
  {
    type: "input",
    name: "name",
    message: "Enter Release Name for deployment",
  },
  {
    type: "input",
    name: "namespace",
    message: "Enter Namespace in which you want to deploy",
  },
  {
    type: "input",
    name: "repo",
    message: "Enter ECR Repository",
  },
  {
    type: "input",
    name: "cluster",
    message: "Enter EKS Cluster Name",
  },
  {
    type: "input",
    name: "host",
    message: "Enter ECR Host name",
  },
  {
    type: "input",
    name: "cluster",
    message: "Enter EKS Cluster Name",
  },
];
const commonAction = [
  {
    type: "addMany",
    destination: `${process.cwd()}/deployment`,
    templateFiles: "plop-templates/deployment",
    base: "plop-templates/deployment",
    force:true
  },
  {
    type: 'add',
    path: `${process.cwd()}/Jenkinsfile.prod`,
    templateFile: 'plop-templates/Jenkinsfile.prod.hbs',
    force:true
  },
]

export default function (plop) {
  plop.setHelper("raw", function (options) {
    return options.fn(this);
  });
  plop.setGenerator("react", {
    description: "Generate reactjs deployment file for kubernates",
    prompts,
    actions: [
      ...commonAction,
      {
        type: "addMany",
        destination: `${process.cwd()}`,
        templateFiles: "plop-templates/react",
        base: "plop-templates/react",
        force:true
      },
    ],
  });
  plop.setGenerator("next", {
    description: "Generate nextjs deployment file for kubernates",
    prompts,
    actions: [
      ...commonAction,
      {
        type: "addMany",
        destination: `${process.cwd()}`,
        templateFiles: "plop-templates/next/Dockerfile",
        base: "plop-templates/next",
        force:true
      },
      {
        type: 'add',
        path: `${process.cwd()}/.dockerignore`,
        templateFile: 'plop-templates/next/.dockerignore.hbs',
        force:true
      },
    ],
  });
}
