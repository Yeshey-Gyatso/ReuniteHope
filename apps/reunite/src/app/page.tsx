import Image from 'next/image'
import {Button} from "ui";
import Display from 'ui/components/display';
import Search from 'ui/components/search';
export default function Home() {
  return (
    <div>
      <Search/>
      <Display/>
      <Button/>
    </div>
  )
}
