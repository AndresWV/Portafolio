import Papa, { ParseResult } from 'papaparse';

interface ProjectFormat {
  img: string;
  title: string;
  resume: string;
  description: string;
  projectLink: string;
  technologies: string[];
  difficulty: string;
}

const readCSV = async (filePath: string): Promise<ProjectFormat[]> => {
  const response = await fetch(filePath);
  const csvData = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      complete: (results: ParseResult<Record<string, string>>) => {
        const projects: ProjectFormat[] = results.data.map((row) => ({
          img: row.img,
          title: row.title,
          resume: row.resume,
          description: row.description,
          projectLink: row.projectLink,
          technologies: row.technologies.split(',').map((tech) => tech.trim()),
          difficulty: row.complejidad,
        }));
        resolve(projects);
      },
      error: (error: Error) => {
        reject(error);
      },
    });
  });
};

export default readCSV;
export type { ProjectFormat };
