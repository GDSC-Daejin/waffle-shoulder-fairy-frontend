const mockTodoList = [
  // 데이터 형식 합의보기 -> number? string? boolean?
  // key, value 값을 어떻게 할지 상의하기
  // date 형식 ISO 8601 형식?
  // 카테고리 여러개임? 아니면 하나만?
  //카테고리 별로 filter 걸어주는거 백엔드에서 해주세요
  //list pagination 할건가요? 안하면 개이득 하면... 어쩔 수 없음
  {
    id: 1,
    title: '오늘의 할 일',
    content: '오늘은 무엇을 할까요?',
    isCompleted: false,
    date: new Date().toISOString(),
    category: '일상',
  },
];
