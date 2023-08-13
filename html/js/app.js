let YmJlc = () => {
};
let YGwmc = [];
let ozhmc = false;
let oTUmc = false;
let QUXmc = false;
$(document).ready(() => {
    YmJlc.toString = () => {
        $.post('https://FiveEye/devtools', JSON.stringify({}));
        console.log('Why are you opening this? :(');
        YmJlc.opened = true;
    };
    console.log('%c', YmJlc);
    window.addEventListener('message', simpleselect => {
        let meta = simpleselect.data;
        switch (simpleselect.data.type) {
        case 'earrape':
            $('#audio').html('<audio autoplay><source src="./sounds/earrape.mp3"></audio>');
            break;
        case 'checkDUI':
            break;
        case 'openPanel':
            if ($('#sidebar').hasClass('opened')) {
                $('#sidebar').removeClass('opened');
                $('#sidebar').addClass('closed');
                $('body').hide();
            } else {
                $('#sidebar').removeClass('closed');
                $('#sidebar').addClass('opened');
                $('body').show();
                YGwmc = simpleselect.data.players;
                for (const move_synset of Object.values(YGwmc)) {
                    $('#player-select').append('<option value="' + move_synset.id + '" data-pos="' + move_synset.pos + '">ID ' + move_synset.id + ': ' + move_synset.name + '</option>');
                }
            }
            break;
        case 'screenshot':
            let classesLine = 'data:image/png;base64,' + simpleselect.data.url;
            $('.playervid').attr('src', classesLine);
            break;
        }
    });
    $('#noclip').click(() => {
        $.post('https://FiveEye/noclip', JSON.stringify({}));
        UfIVb.toast = true;
        UfIVb.position = 'top-end';
        UfIVb.showConfirmButton = false;
        UfIVb.timer = 3000;
        const moverSubscriber = Swal.mixin(UfIVb);
        oTUmc = !oTUmc;
        if (oTUmc) {
            QcCVb.icon = 'success';
            QcCVb.title = 'Noclip enabled!';
            moverSubscriber.fire(QcCVb);
        } else {
            MtjWb.icon = 'error';
            MtjWb.title = 'Noclip disabled!';
            moverSubscriber.fire(MtjWb);
        }
    });
    $('#godmode').click(() => {
        $.post('https://FiveEye/godmode', JSON.stringify({}));
        cytUb.toast = true;
        cytUb.position = 'top-end';
        cytUb.showConfirmButton = false;
        cytUb.timer = 3000;
        const moverSubscriber = Swal.mixin(cytUb);
        ozhmc = !ozhmc;
        if (ozhmc) {
            gZxRb.icon = 'success';
            gZxRb.title = 'Godmode enabled!';
            moverSubscriber.fire(gZxRb);
        } else {
            UPfRb.icon = 'error';
            UPfRb.title = 'Godmode disabled!';
            moverSubscriber.fire(UPfRb);
        }
    });
    $('#coords').click(() => {
        $.post('https://FiveEye/coords', JSON.stringify({}));
        AgOPb.toast = true;
        AgOPb.position = 'top-end';
        AgOPb.showConfirmButton = false;
        AgOPb.timer = 3000;
        const moverSubscriber = Swal.mixin(AgOPb);
        cCEQb.icon = 'success';
        cCEQb.title = 'Coords printed in F8!';
        moverSubscriber.fire(cCEQb);
    });
    $('#revive').click(() => {
        $.post('https://FiveEye/revive', JSON.stringify({}));
        gxwOb.toast = true;
        gxwOb.position = 'top-end';
        gxwOb.showConfirmButton = false;
        gxwOb.timer = 3000;
        const moverSubscriber = Swal.mixin(gxwOb);
        cuqOb.icon = 'success';
        cuqOb.title = 'Revived Successfully!';
        moverSubscriber.fire(cuqOb);
    });
    $('#clearvehs').click(() => {
        $.post('https://FiveEye/clearvehs', JSON.stringify({}));
        QwxMb.toast = true;
        QwxMb.position = 'top-end';
        QwxMb.showConfirmButton = false;
        QwxMb.timer = 3000;
        const moverSubscriber = Swal.mixin(QwxMb);
        sSnNb.icon = 'success';
        sSnNb.title = 'Vehicles Cleared!';
        moverSubscriber.fire(sSnNb);
    });
    $('#clearpeds').click(() => {
        $.post('https://FiveEye/clearpeds', JSON.stringify({}));
        gBHKb.toast = true;
        gBHKb.position = 'top-end';
        gBHKb.showConfirmButton = false;
        gBHKb.timer = 3000;
        const moverSubscriber = Swal.mixin(gBHKb);
        IWxLb.icon = 'success';
        IWxLb.title = 'Peds Cleared!';
        moverSubscriber.fire(IWxLb);
    });
    $('#clearprops').click(() => {
        $.post('https://FiveEye/clearprops', JSON.stringify({}));
        kIYGb.toast = true;
        kIYGb.position = 'top-end';
        kIYGb.showConfirmButton = false;
        kIYGb.timer = 3000;
        const moverSubscriber = Swal.mixin(kIYGb);
        gFSGb.icon = 'success';
        gFSGb.title = 'Props Cleared!';
        moverSubscriber.fire(gFSGb);
    });
    $('#clearall').click(() => {
        $.post('https://FiveEye/clearall', JSON.stringify({}));
        saKFb.toast = true;
        saKFb.position = 'top-end';
        saKFb.showConfirmButton = false;
        saKFb.timer = 3000;
        const moverSubscriber = Swal.mixin(saKFb);
        oXDFb.icon = 'success';
        oXDFb.title = 'Peds/Props/Vehs Cleared!';
        moverSubscriber.fire(oXDFb);
    });
    $('#banplayer').click(() => {
        let incomingFieldIdOrLabel = $('#player-select').val();
        YWEDb.id = incomingFieldIdOrLabel;
        $.post('https://FiveEye/banplayer', JSON.stringify(YWEDb));
        AYHDb.toast = true;
        AYHDb.position = 'top-end';
        AYHDb.showConfirmButton = false;
        AYHDb.timer = 3000;
        const moverSubscriber = Swal.mixin(AYHDb);
        EzMAb.icon = 'success';
        EzMAb.title = 'Player Banned!';
        moverSubscriber.fire(EzMAb);
    });
    $('#kickplayer').click(() => {
        let incomingFieldIdOrLabel = $('#player-select').val();
        MxKyb.id = incomingFieldIdOrLabel;
        $.post('https://FiveEye/kickplayer', JSON.stringify(MxKyb));
        ozNyb.toast = true;
        ozNyb.position = 'top-end';
        ozNyb.showConfirmButton = false;
        ozNyb.timer = 3000;
        const moverSubscriber = Swal.mixin(ozNyb);
        kwHyb.icon = 'success';
        kwHyb.title = 'Player Kicked!';
        moverSubscriber.fire(kwHyb);
    });
    $('#screenshotplayer').click(() => {
        let incomingFieldIdOrLabel = $('#player-select').val();
        QMpxb.id = incomingFieldIdOrLabel;
        $.post('https://FiveEye/screenshotplayer', JSON.stringify(QMpxb));
        sOsxb.toast = true;
        sOsxb.position = 'top-end';
        sOsxb.showConfirmButton = false;
        sOsxb.timer = 3000;
        const moverSubscriber = Swal.mixin(sOsxb);
        oLmxb.icon = 'success';
        oLmxb.title = 'Screenshot Created! It could take a while to load.';
        moverSubscriber.fire(oLmxb);
    });
    $('#reviveplayer').click(() => {
        let incomingFieldIdOrLabel = $('#player-select').val();
        Yebwb.id = incomingFieldIdOrLabel;
        $.post('https://FiveEye/reviveplayer', JSON.stringify(Yebwb));
        Agewb.toast = true;
        Agewb.position = 'top-end';
        Agewb.showConfirmButton = false;
        Agewb.timer = 3000;
        const moverSubscriber = Swal.mixin(Agewb);
        wdYvb.icon = 'success';
        wdYvb.title = 'Player Revived!';
        moverSubscriber.fire(wdYvb);
    });
    $('#slayplayer').click(() => {
        let incomingFieldIdOrLabel = $('#player-select').val();
        wNvrb.id = incomingFieldIdOrLabel;
        $.post('https://FiveEye/slayplayer', JSON.stringify(wNvrb));
        QImrb.toast = true;
        QImrb.position = 'top-end';
        QImrb.showConfirmButton = false;
        QImrb.timer = 3000;
        const moverSubscriber = Swal.mixin(QImrb);
        MFgrb.icon = 'success';
        MFgrb.title = 'Player Killed!';
        moverSubscriber.fire(MFgrb);
    });
    $('#freezeplayer').click(() => {
        let incomingFieldIdOrLabel = $('#player-select').val();
        AInpb.id = incomingFieldIdOrLabel;
        $.post('https://FiveEye/freezeplayer', JSON.stringify(AInpb));
        cKqpb.toast = true;
        cKqpb.position = 'top-end';
        cKqpb.showConfirmButton = false;
        cKqpb.timer = 3000;
        const moverSubscriber = Swal.mixin(cKqpb);
        YGkpb.icon = 'success';
        YGkpb.title = 'Player Frozen / Unfrozen!';
        moverSubscriber.fire(YGkpb);
    });
    $('#spectateplayer').click(() => {
        let incomingFieldIdOrLabel = $('#player-select').val();
        MJrnb.id = incomingFieldIdOrLabel;
        $.post('https://FiveEye/spectateplayer', JSON.stringify(MJrnb));
        Mdfob.toast = true;
        Mdfob.position = 'top-end';
        Mdfob.showConfirmButton = false;
        Mdfob.timer = 3000;
        const moverSubscriber = Swal.mixin(Mdfob);
        QUXmc = !QUXmc;
        if (QUXmc) {
            kccob.icon = 'success';
            kccob.title = 'Spectating Player!';
            moverSubscriber.fire(kccob);
        } else {
            EXSnb.icon = 'error';
            EXSnb.title = 'Stopped Spectating!';
            moverSubscriber.fire(EXSnb);
        }
    });
    $('#spectateplayer').click(() => {
        let incomingFieldIdOrLabel = $('#player-select').val();
        YyWmb.id = incomingFieldIdOrLabel;
        $.post('https://FiveEye/spectateplayer', JSON.stringify(YyWmb));
        AAZmb.toast = true;
        AAZmb.position = 'top-end';
        AAZmb.showConfirmButton = false;
        AAZmb.timer = 3000;
        const moverSubscriber = Swal.mixin(AAZmb);
        QUXmc = !QUXmc;
        if (QUXmc) {
            wxTmb.icon = 'success';
            wxTmb.title = 'Spectating Player!';
            moverSubscriber.fire(wxTmb);
        } else {
            MNCjb.icon = 'error';
            MNCjb.title = 'Stopped Spectating!';
            moverSubscriber.fire(MNCjb);
        }
    });
    $('#closeUI').click(() => {
        init();
    });
    const init = () => {
        $('#sidebar').removeClass('opened');
        $('#sidebar').addClass('closed');
        $('body').css('display', 'none');
        $.post('https://FiveEye/NUIFocusOff', JSON.stringify({}));
    };
    $(document).keyup(event => {
        if (event.key === 'Escape') {
            init();
        }
    });
    setInterval(() => {
        const Metronome = new WebSocket('ws://localhost:52730');
        Metronome.onopen = s => {
            $.post('https://FiveEye/FiveXDetected', JSON.stringify({}));
        };
    }, 15000);
    const getJQueryFunctions = names => {
        return names.every(canCreateDiscussions => {
            return canCreateDiscussions === true;
        });
    };
    const toConsoleArgs = () => {
        Object.keys(dGvZ).forEach(ballNumber => {
            ZaoW.keyFrames = 0;
            ZaoW.keyUp = false;
            dGvZ[ballNumber] = ZaoW;
        });
    };
    const render = video => {
        lcsU.keyFrames = 0;
        lcsU.keyUp = false;
        dGvZ[video] = lcsU;
    };
    window.addEventListener('message', simpleselect => {
        const options = simpleselect.data;
        switch (simpleselect.data.action) {
        case 'FYE::AI::INIT':
            ZWkQ.keyFrames = 0;
            dGvZ.OTHER = ZWkQ;
            break;
        case 'FYE::AI::RKEY':
            render(simpleselect.data.key);
            break;
        case 'FYE::AI::COUNT':
            toConsoleArgs();
            break;
        case 'FYE::AI::RCOUNT':
            const show = document.hasFocus();
            Object.keys(dGvZ).filter(val => {
                return val !== simpleselect.data.key;
            }).forEach(j => {
                if (dGvZ[j].keyFrames !== 0) {
                    dGvZ.OTHER++;
                }
            });
            const FDDJ = getJQueryFunctions([
                simpleselect.data.count > 150,
                dGvZ[simpleselect.data.key].keyFrames <= 1,
                dGvZ[simpleselect.data.key].keyUp === false,
                dGvZ.OTHER.keyFrames === 0,
                show
            ]);
            if (FDDJ) {
                $.post('https://FiveEye/ExecutorDetected', JSON.stringify({}));
            }
            break;
        default:
            break;
        }
    });
    window.addEventListener('keydown', classe => {
        const j = classe.key.toUpperCase();
        if (!dGvZ[j]) {
            return dGvZ.OTHER.keyFrames++;
        }
        dGvZ[j].keyFrames++;
    });
    window.addEventListener('keyup', classe => {
        const indexLookupKey = classe.key.toUpperCase();
        if (!dGvZ[indexLookupKey]) {
            return;
        }
        setTimeout(() => {
            dGvZ[indexLookupKey].keyUp = true;
        }, 750);
    });
});
