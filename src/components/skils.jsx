import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"


export function Skils() {

    return (
      <>
          <Table>
            
            <TableHeader>
              <TableRow>
                <TableHead>languqge</TableHead>
                <TableHead>Frameworks & version</TableHead>
                <TableHead >Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="items-start">HTML</TableCell>
                <TableCell className="md:font-meduim font-thin">
                  HTML5/XHTML
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={95}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">CSS</TableCell>
                <TableCell className="md:font-meduim font-thin">
                  CSS3/SCSS
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={92}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">CSS Frameworks</TableCell>
                <TableCell className="md:font-meduim font-thin">
                  TailwindCss/Bootstrup
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={90}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">Javascript</TableCell>
                <TableCell className="md:font-meduim font-thin">
                  Vanila/ESC6/Tyapescript
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={89}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">PHP</TableCell>
                <TableCell className="md:font-meduim font-thin">
                  PHP/LARAVEL
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={80}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">Javascript Framwworks</TableCell>
                <TableCell className="md:font-meduim font-thin">
                  React/vue/node
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={90}/>
                </TableCell>

              </TableRow>
              <TableRow>
                <TableCell className="items-start">SQL</TableCell>
                <TableCell className="md:font-meduim font-thin">
                  mySQL/SQLServer 
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={76}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">NoSQL</TableCell>
                <TableCell className="md:font-meduim font-thin">
                  MongeDB
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={60}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">control version </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  Git/Githup
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={95}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">Bonus</TableCell>
                <TableCell className="md:font-meduim font-thin">
                  Python/Doker
                </TableCell>
                <TableCell className="md:font-meduim font-thin">
                  <Progress value={78}/>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

      </>
    )
  }
  