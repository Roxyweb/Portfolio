export type Project = { name: string; category: string; mark: string; status: string; description: string; technologies: string[]; url?: string }
export const projects: Project[] = [
  { name: 'JARVIS', category: 'PERSONAL PROJECT', mark: 'J.', status: 'In development', description: 'An experimental personal assistant exploring voice interaction, desktop automation and intelligent system control.', technologies: ['Python', 'Speech Recognition', 'Automation'] },
  { name: 'Foundation Website', category: 'WEB EXPERIENCE', mark: 'F.', status: 'Project', description: 'A responsive web experience created for a foundation, focusing on clear content presentation, navigation and interactive frontend elements.', technologies: ['HTML', 'CSS', 'JavaScript'], url: 'https://oyije-helpmate-foundation.vercel.app/' },
  { name: 'Birthday Website', category: 'CLIENT WEBSITE', mark: 'B.', status: 'Client project', description: 'A birthday website created for a client. Visit the live site to explore the experience.', technologies: [], url: 'https://mummybirthday-iota.vercel.app/' },
  { name: 'Valentine Project For Fun', category: 'FUN PROJECT', mark: 'V.', status: 'Live', description: 'A playful Valentine-themed website made for fun. Visit the live project to explore it.', technologies: [], url: 'https://valentin-e.vercel.app/' },
]
