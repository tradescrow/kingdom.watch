<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Floor prices</h3>

        <h4 class="font-monospace">Kingdom.Watch Floor Price [KWFP]</h4>
        <p class="text-start">
          The <span class="font-monospace">KWFL</span> is my attempt at presenting the floor price of any given hero for
          various use cases.
        </p>
        <p class="text-start">
          The floor is the current lowest price in the Tavern for a hero based on five characteristics.
          If no such hero is for sale, it widens the search for heroes a bit less similar.
        </p>
        <p class="text-start">
          To reduce the impact of outliers with an unrealistic pricing, some of the characteristics are divided into
          buckets as described below.
        </p>
        <p class="text-start">
          As it is rather important to understand what lie behind the floor price presented, a confidence rating is also
          provided. The keys are disclosed in the table below.
        </p>
        <table class="table table-striped">
          <thead>
          <tr>
            <th class="text-start">Characteristic</th>
            <th class="text-start">Keys</th>
            <th class="text-start">Buckets</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="text-start">Generation</td>
            <td class="text-start">G0, G1, G2, G3, G4+</td>
            <td class="text-start">Generation 0, 1, 2, 3 are separate buckets. Generation 4+ is merged into one
              bucket.
            </td>
          </tr>
          <tr>
            <td class="text-start">Rarity</td>
            <td class="text-start">R</td>
            <td class="text-start">Each rarity has it's own bucket.</td>
          </tr>
          <tr>
            <td class="text-start">Summons left</td>
            <td class="text-start">S0, S1-4, S5-7, S8+, Si</td>
            <td class="text-start">
              The buckets are currently 0, 1-4, 5-7, and 8-10 summons left. Gen0 heroes with unlimited summons has only
              one bucket for infinite summons.
            </td>
          </tr>
          <tr>
            <td class="text-start">Main class</td>
            <td class="text-start">C</td>
            <td class="text-start">Each main class has it's own bucket.</td>
          </tr>
          <tr>
            <td class="text-start">Profession</td>
            <td class="text-start">P</td>
            <td class="text-start">Each profession has it's own bucket.</td>
          </tr>
          </tbody>
        </table>

        <h4>Change log</h4>
        <table class="table table-striped">
          <thead>
          <tr>
            <th class="text-start">Version</th>
            <th class="text-start">Changes</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="text-start">v0.3</td>
            <td class="text-start">
              <ul>
                <li>
                  Divided the generation characteristics into buckets 0, 1, 2, 3, 4+.
                </li>
                <li>
                  Added summons left with buckets 0, 1-4, 5-7, 8-10 and Infinite.
                </li>
              </ul>
            </td>

          </tr>
          <tr>
            <td class="text-start">v0.2</td>
            <td class="text-start">
              <ul>
                <li>
                  Added profession to the characteristics.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="text-start">v0.1</td>
            <td class="text-start">
              <ul>
                <li>
                  Initial release based on the characteristics generation, rarity and main class.
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloorPrice"
}
</script>

<style scoped>

</style>