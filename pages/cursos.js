import NextLink from "next/link";

import { Layout, CourseListItem } from "@/components";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Courses({ courses }) {
  const metadata = {
    title: "Cursos desarrollo Web",
  };

  return (
    <Layout type="post" metadata={metadata}>
      {courses.map((course) => (
        <NextLink href={`/cursos/${course.slug}`} key={course.slug}>
          <a>
            <CourseListItem title={course.title} />
          </a>
        </NextLink>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const courses = await getAllFilesFrontMatter("courses");

  return {
    props: { courses },
  };
}
