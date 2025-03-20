import React from "react";
import { Table } from "@chakra-ui/react";

const tableHeader = ["라이브러리", "성능", "장점", "단점", "라이선스"];

const tableBody = {
  mermaid: [
    "Mermaid",
    "가벼운 성능이지만 복잡한 다이어그램에서는 속도가 느려질 수 있음",
    "마크다운 스타일의 문법 사용, HTML 내에서 바로 사용 가능",
    "제한적인 커스텀 스타일링, 복잡한 인터랙션 추가 어려움, 대규모 데이터 처리 성능 낮음",
    "MIT",
  ],
  reactflow: [
    "React-flow",
    "고성능, 대량의 노드/엣지도 부드럽게 처리 가능",
    "고성능, 가벼운 렌더링 노드, 엣지의 스타일링과 커스텀 가능, 드래그&드롭과 줌 및 패닝 지원",
    "학습 곡선이 있음, 기본 제공되는 스타일은 단순함, 서버 사이드 렌더링 지원이 미흡함",
    "MIT",
  ],
};

const Main = () => {
  return (
    <article id="Main" className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg">라이브러리 비교 분석</h3>
        <Table.ScrollArea borderWidth="1px">
          <Table.Root size="md" variant="outline">
            <Table.Header>
              <Table.Row>
                {tableHeader.map((header, index) => (
                  <Table.ColumnHeader key={`header-${index}`}>
                    {header}
                  </Table.ColumnHeader>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Object.values(tableBody).map((body, index) => (
                <Table.Row key={`body-${index}`}>
                  {body.map((cell, index) => (
                    <Table.Cell key={`cell-${index}`}>
                      {cell.split(",").map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i !== cell.split(",").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </section>
    </article>
  );
};

export default Main;
