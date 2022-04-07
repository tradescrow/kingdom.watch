export const expansions = ['Serendale', 'Crystalvale'];

const expansionEpochData = {
  firstBlock: [16350367, 8943],
  blocksPerEpoch: [302400, 302400],
  blockSpeedSeconds: [2.0, 2.0],
  unlockStart: [5, 5],
  unlockWeeklyIncrease: [2, 2],
  multiplierSchedule: [
    function multiplierSerendale(i: number) {
      if (i < 20) {
        switch (i) {
          case 1:
            return 256;
          case 2:
            return 128;
          case 3:
            return 96;
          case 4:
            return 64;
          case 5:
            return 56;
          case 6:
            return 48;
          case 7:
            return 40;
          case 8:
            return 32;
          case 9:
            return 28;
          case 10:
            return 24;
          case 11:
            return 20;
          case 12:
            return 16;
          case 13:
            return 15;
          case 14:
            return 14;
          case 15:
            return 13;
          case 16:
            return 12;
          case 17:
            return 11;
          case 18:
            return 10;
          case 19:
            return 9;
        }
      } else if (i < 36) {
        return 8;
      }
      return 4;
    },
    // 16 crystal/s ~ 32 crystal/block
    function multiplierCrystalvale(i: number) {
      if (i < 21) {
        switch (i) {
          case 1:
            return 32;
          case 2:
            return 24;
          case 3:
            return 20;
          case 4:
            return 16;
          case 5:
            return 14;
          case 6:
            return 12;
          case 7:
            return 10;
          case 8:
            return 10;
          case 9:
            return 8;
          case 10:
            return 8;
          case 11:
            return 6;
          case 12:
            return 6;
          case 13:
            return 4;
          case 14:
            return 4;
          case 15:
            return 4;
          case 16:
            return 4;
          case 17:
            return 3;
          case 18:
            return 3;
          case 19:
            return 3;
          case 20:
            return 3;
        }
      } else if (i < 101) {
        return 2;
      }
      return 1;
    },
  ],
};

export type epochDataType = {
  epoch: number | null;
  epochStart: number | null;
  unlock: number | null;
  multiplier: number | null;
  timeLeftString: string | null;
};

export const emptyEpochData = {
  epoch: null,
  epochStart: null,
  unlock: null,
  multiplier: null,
  timeLeftString: null,
};

function currentEpoch(currentBlock: number, expansion: number) {
  const diff = currentBlock - expansionEpochData.firstBlock[expansion];

  if (diff < 0) {
    throw new Error(
      `Invalid current block ${currentBlock} is less than first block ${expansionEpochData.firstBlock[expansion]}`
    );
  }

  return Math.floor(diff / expansionEpochData.blocksPerEpoch[expansion]) + 1;
}

function epochStartBlock(epoch: number, expansion: number) {
  return (
    expansionEpochData.firstBlock[expansion] +
    expansionEpochData.blocksPerEpoch[expansion] * (epoch - 1)
  );
}

function secondsLeftUntilEpoch(
  currentBlock: number,
  epoch: number,
  expansion: number
) {
  return (
    (epochStartBlock(epoch, expansion) - currentBlock) *
    expansionEpochData.blockSpeedSeconds[expansion]
  );
}

function timeLeftUntilEpochString(
  currentBlock: number,
  epoch: number,
  expansion: number
) {
  const nextEpochSeconds = secondsLeftUntilEpoch(
    currentBlock,
    epoch,
    expansion
  );

  if (nextEpochSeconds < 0) {
    return '';
  } else if (nextEpochSeconds < 60) {
    return 'imminent';
  } else if (nextEpochSeconds < 600) {
    return 'less than 10 minutes';
  } else if (nextEpochSeconds < 3600) {
    return 'about ' + (nextEpochSeconds / 60).toFixed(1) + ' minutes';
  } else if (nextEpochSeconds < 86400) {
    return 'about ' + (nextEpochSeconds / 3600).toFixed(1) + ' hours';
  } else if (nextEpochSeconds < 7 * 86400) {
    return 'about ' + (nextEpochSeconds / 86400).toFixed(1) + ' days';
  } else if (nextEpochSeconds < 30 * 86400) {
    return 'about ' + (nextEpochSeconds / (7 * 86400)).toFixed(1) + ' weeks';
  } else {
    return 'about ' + (nextEpochSeconds / (30 * 86400)).toFixed(1) + ' months';
  }
}

function getEpochData(epoch: number, currentBlock: number, expansion: number) {
  return {
    epoch: epoch,
    epochStart: epochStartBlock(epoch, expansion),
    unlock: Math.min(
      100,
      epoch * expansionEpochData.unlockWeeklyIncrease[expansion] +
        expansionEpochData.unlockStart[expansion] -
        2
    ),
    multiplier: expansionEpochData.multiplierSchedule[expansion](epoch),
    timeLeftString: timeLeftUntilEpochString(currentBlock, epoch, expansion),
  };
}

function getCurrentEpochs(epochStartBlocks: Array<number>) {
  const currentEpochs = [];
  for (let j = 0; j < expansions.length; ++j) {
    currentEpochs.push(currentEpoch(epochStartBlocks[j], j));
  }
  return currentEpochs;
}

function calculateEpochData(
  epochStartBlocks: Array<number>,
  maxEpochs: number
) {
  const currentEpochs = getCurrentEpochs(epochStartBlocks);
  const epochData = [];
  for (let i = 0; i < maxEpochs; ++i) {
    const epochDatum = [];
    for (let j = 0; j < expansions.length; ++j) {
      const epoch = i + currentEpochs[j];
      epochDatum.push(getEpochData(epoch, epochStartBlocks[j], j));
    }
    epochData.push(epochDatum);
  }
  return epochData;
}

const Epochs = {
  calculateEpochData,
};
export default Epochs;
