import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ComponentPreview } from "./component-preview";

const invoices = [
  { invoice: "INV001", status: "결제완료", amount: "$250.00" },
  { invoice: "INV002", status: "대기중", amount: "$150.00" },
  { invoice: "INV003", status: "미결제", amount: "$350.00" },
];

export function DataDisplayDemo() {
  return (
    <>
      <ComponentPreview title="배지" description="상태 라벨 및 태그입니다.">
        <div className="flex flex-wrap gap-2">
          <Badge>기본</Badge>
          <Badge variant="secondary">보조</Badge>
          <Badge variant="outline">아웃라인</Badge>
          <Badge variant="destructive">위험</Badge>
        </div>
      </ComponentPreview>

      <ComponentPreview title="아바타" description="이미지와 텍스트 대체 표시입니다.">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="테이블"
        description="표 형태의 데이터 표시입니다."
        className="items-start"
      >
        <Table>
          <TableCaption>최근 인보이스 목록입니다.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>인보이스</TableHead>
              <TableHead>상태</TableHead>
              <TableHead className="text-right">금액</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((row) => (
              <TableRow key={row.invoice}>
                <TableCell>{row.invoice}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell className="text-right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentPreview>
    </>
  );
}
