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
                <TableCell className="font-medium">
                  HTML5/XHTML
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={95}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">CSS</TableCell>
                <TableCell className="font-medium">
                  CSS3/SCSS
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={92}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">CSS Frameworks</TableCell>
                <TableCell className="font-medium">
                  TailwindCss/Bootstrup
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={90}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">Javascript</TableCell>
                <TableCell className="font-medium">
                  Vanila/ESC6/Tyapescript
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={89}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">PHP</TableCell>
                <TableCell className="font-medium">
                  PHP/LARAVEL
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={80}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">Javascript Framwworks</TableCell>
                <TableCell className="font-medium">
                  React/vue/node
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={90}/>
                </TableCell>

              </TableRow>
              <TableRow>
                <TableCell className="items-start">SQL</TableCell>
                <TableCell className="font-medium">
                  mySQL/SQLServer 
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={76}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">NoSQL</TableCell>
                <TableCell className="font-medium">
                  MongeDB
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={60}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">control version </TableCell>
                <TableCell className="font-medium">
                  Git/Githup
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={95}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="items-start">Bonus</TableCell>
                <TableCell className="font-medium">
                  Python/Doker
                </TableCell>
                <TableCell className="font-medium">
                  <Progress value={78}/>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

      </>
    )
  }
  