import Link from 'next/link'
import Button from '@mui/material/Button';
 
export default function NotFound() {
  return (
    <div>
      <h2>404: Not Found</h2>
      <p>Could not find requested joke! Did you get here by mistake?</p>
      <Link href="/">
      <Button variant="outlined">Click Here to Return Home</Button>
      </Link>
    </div>
  )
}