import React from 'react';
import ExpFooter from '../components/ExpFooter';
import ExpMenu from '../components/ExpMenu';
import PerkGrid from '../components/PerkGrid';

export default function pricing() {
  return (
    <div>
      <section>
        <ExpMenu />
        <Typography>PRICING</Typography>
        <Typography></Typography>
        <PriceGrid color={'red'}></PriceGrid>
        <PriceGrid color={'yellow'}></PriceGrid>
        <PriceGrid color={'blue'}></PriceGrid>
      </section>
      <section>
        <ExpMenu />
        <Typography>PERKS</Typography>
        <PerkGrid headingColor={"white"} bodyColor={"black"} heading={""} body={""}/>
        <PerkGrid headingColor={"white"} bodyColor={"black"} heading={""} body={""}/>
        <PerkGrid headingColor={"white"} bodyColor={"black"} heading={""} body={""}/>
      </section>
      <ExpFooter/>
    </div>
  );
}
