import React from 'react'
import { Card, CardHeader } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'

const ProjectCard = ({project}) => {
  return (
    <Card className="group overflow-hidden relative m-2">
      <CardHeader className="p-0">
        {/*Img */}
        <div className="relative w-full h-[260px] flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden">
          <Image
          src={project.image}
          width={440}
          height={200}
          alt={project.category}
          priority
          className="absolute top-0 shadow-2xl hover:scale-110 transition-all duration-500 ease-in-out"
          />
        </div>
      </CardHeader>

      <di>
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
      </di>
    </Card>
  )
}

export default ProjectCard
