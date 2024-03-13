export interface WorkExperienceData {
  company: string
  title: string
  startDate: string
  endDate: string
  rol: string[]
  fullTime: boolean
  techStack?: any[]
}

export interface ProjectData {
  title: string
  description: string
  longDescription: any
  stack: string[]
  github: string
  url: string
}