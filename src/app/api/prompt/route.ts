function iteratorToStream(iterator: any) { 
    return new ReadableStream({
      async pull(controller) {
        const { value, done } = await iterator.next() // That also works
        if (done) {
          controller.close()
        } else {
          controller.enqueue(value)
        }
      },
    })
  }
   
  function sleep(time: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }
   
  const encoder = new TextEncoder()
   
  async function* makeIterator() {
    yield encoder.encode('First chunk: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,....');
    await sleep(200) // this is the delay for continuous querry
    yield encoder.encode('###Second chunk: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,.....');
    await sleep(200)
    yield encoder.encode('###Third chunk: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,....')
    // Here logic for frequency of querries
  }
   
  export async function GET() {  //req: any
    const iterator = makeIterator()
    const stream = iteratorToStream(iterator)
   
    return new Response(stream)
  }