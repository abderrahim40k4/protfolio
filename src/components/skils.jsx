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
                <TableCell className="font-medium">HTML</TableCell><br></br>
                <TableCell className="font-medium">HTML5</TableCell>
                </TableCell>

                <TableCell className="font-medium">
                <TableCell className="font-medium w-1/3">
                  <Progress value={33} className="w-full"/> test
                </TableCell><br/>
                <TableCell className="font-medium w-1/3">
                  <Progress value={33} className="w-full"/> test
                </TableCell>
                </TableCell>
    
              </TableRow>
            </TableBody>
          </Table>

      </>
    )
  }
  