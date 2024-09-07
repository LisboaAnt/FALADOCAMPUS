'use client'
import React, { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'

const projectData = [
  {
      image: '/work/3.png',
      category: 'Portraits',
      name: "Portrait: MacrofAlLian",
      description:  "Shoot Date: 08/01/2024",
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/9.png',
      category: 'Portraits',
      name: "Portrait: MacrofAlLian",
      description:  "Shoot Date: 11/01/2017",
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/2.png',
      category: 'Products',
      name: 'Product: Cosmetics',
      description: 'Shoot Date: 14/01/2018',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/1.png',
      category: 'Portraits',
      name: 'Portrait: Lucy Aln',
      description: 'Shoot Date: 16/07/2023',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/8.png',
      category: 'Fashion',
      name: 'Fashion: Edu',
      description: 'Shoot Date: 16/07/2021',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/9.png',
      category: 'Fashion',
      name: 'Fashion: Jony',
      description: 'Shoot Date: 06/05/2022',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/5.png',
      category: 'Portraits',
      name: 'Portrait: Elsa Liv',
      description: 'Shoot Date: 09/03/2024',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/11.png',
      category: 'Fashion',
      name: 'Fashion: Adam',
      description: 'Shoot Date: 13/02/2021',
      link: '/',
      codepen: '/',
  }
]

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
]

const portfolio = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects')

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
    ? project
    : project.category === category
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Portfolio
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
            {
              categories.map((category, index) => {
                return(
                  <TabsTrigger
                  value={category}
                  key={index}
                  onClick={() => setCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                  >
                    {category}
                  </TabsTrigger>
                )
              })
            }
          </TabsList>

          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
              filteredProjects.map((project, index) => {
                return(
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project}/>
                  </TabsContent>
                )
              })
            }
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default portfolio
