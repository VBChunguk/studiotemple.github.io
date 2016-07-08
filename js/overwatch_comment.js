var input, output, btn, mix, result, isRandom;

            input = $('.input');
            output = $('.result');
            btn = $('.btn');

            function makeRandom(min, max){
                var RandVal = Math.random() * (max- min) + min;
                return Math.floor(RandVal);
            }

            function mixing(){

                var isBreak = false;

                for(i=input.val().length; i >= 0; i--){

                        mix = input.val().charAt(i);

                        switch(mix){

                            case "하" :
                                isRandom = makeRandom(1,3);
                                if(isRandom == 1){
                                    result = input.val().slice(0, i+1) + "...나무라로 떠납니다."; 
                                } else if(isRandom ==2) {
                                    result = input.val().slice(0, i+1) + "...늘에서 정의가 빗발친다!.."; 
                                }
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "감" :
                                result = input.val().slice(0, i+1) + "...시기지 : 지브롤터에 진입합니다."; 
                                output.text(result); 
                                isBreak = true;
                                break;     
                            case "도" :
                                result = input.val().slice(0, i+1) + "...라도로 떠납니다."; 
                                output.text(result);  
                                isBreak = true;
                                break;
                            case "6" :
                                result = input.val().slice(0, i+1) + "...6번 국도로 떠납니다."; 
                                output.text(result); 
                                isBreak = true;
                                break;
                            case "육" :
                                result = input.val().slice(0, i+1) + "...6번 국도로 떠납니다."; 
                                output.text(result); 
                                isBreak = true;
                                break;
                            case "볼" :
                                result = input.val().slice(0, i+1) + "...스카야 인더스트리에 진입합니다."; 
                                output.text(result);  
                                isBreak = true;
                                break;
                            case "아" :
                                isRandom = makeRandom(1,4);
                                if(isRandom == 1){
                                    result = input.val().slice(0, i+1) + "...누비스 신전에 진입합니다."; 
                                } else if(isRandom ==2) {
                                    result = input.val().slice(0, i+1) + "...무도 내게서 숨진 못해."; 
                                } else if(isRandom ==3){
                                    result = input.val().slice(0, i+1) + "....곤 빠가돈!(Огонь по готовности!)"; 
                                }
                                output.text(result);
                                isBreak = true;
                                break;
                            case "눔" :
                                result = input.val().slice(0, i+1) + "...바니로 떠납니다."; 
                                output.text(result); 
                                isBreak = true;
                                break;
                            case "왕" :
                                result = input.val().slice(0, i+1) + "...의 길에 진입합니다."; 
                                output.text(result);  
                                isBreak = true;
                                break;
                            case "할" :
                                result = input.val().slice(0, i+1) + "...리우드에 오신 것을 환영합니다."; 
                                output.text(result);
                                isBreak = true;
                                break;
                            case "네" :
                                result = input.val().slice(0, i+1) + "...팔로 떠납니다."; 
                                output.text(result); 
                                isBreak = true;
                                break;
                            case "리" :
                                result = input.val().slice(0, i+1) + "...장 타워에 도착합니다."; 
                                output.text(result); 
                                isBreak = true;
                                break;
                            case "일" :
                                isRandom = makeRandom(1,3);
                                if(isRandom ==1){
                                    result = input.val().slice(0, i+1) + "...리오스에 도착합니다."; 
                                } else if(isRandom ==2){
                                    result = input.val().slice(0, i+1) + "...단 만들어! 그리고 부숴!."; 
                                }
                                output.text(result);
                                isBreak = true;
                                break;
                            case "겐" :
                                result = input.val().slice(0, i+1) + "...지가 함께한다."; 
                                output.text(result);
                                isBreak = true;
                                break;
                            case "미" :
                                result = input.val().slice(0, i+1) + "...오스테테모, 묘-리와스테즈."; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "류" :
                                isRandom = makeRandom(1,3);
                                if(isRandom == 1){
                                    result = input.val().slice(0, i+1) + "...-진노 켄오 쿠라에."; 
                                } else if (isRandom == 2){
                                    result = input.val().slice(0, i+1) + "...요, 와가 테키오 쿠라에!."; 
                                }
                                output.text(result);
                                isBreak = true;
                                break; 
                            case "용" :
                                isRandom = makeRandom(1,6);
                                if(isRandom == 1){
                                    result = input.val().slice(0, i+1) + "...이 내가 된다!"; 
                                } else if (isRandom == 2){
                                    result = input.val().slice(0, i+1) + "...이 눈을 뜬다."; 
                                } else if (isRandom == 3){
                                    result = input.val().slice(0, i+1) + "...의 눈으로 봐라.."; 
                                } else if (isRandom == 4){
                                    result = input.val().slice(0, i+1) + "...의 징표를 남겨 주지"; 
                                } else if (isRandom == 5){
                                    result = input.val().slice(0, i+1) + "...이여, 적들을 삼켜라!"; 
                                }
                                
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "죽" :
                                result = input.val().slice(0, i+1) + "...어! 죽어! 죽어!"; 
                                output.text(result);
                                isBreak = true;
                                break; 
                            case "석" :
                                result = input.val().slice(0, i+1) + "...양이 진다..."; 
                                output.text(result);
                                isBreak = true;
                                break; 
                            case "솔" :
                                result = input.val().slice(0, i+1) + "...저:76 작전을 시작한다."; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "목" :
                                result = input.val().slice(0, i+1) + "...표를 포착했다."; 
                                output.text(result);
                                isBreak = true;
                                break;          
                            case "전" :
                                result = input.val().slice(0, i+1) + "...술 조준경 활성화!"; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "안" :
                                result = input.val().slice(0, i+1) + "...녕, 친구들! 해결사가 왔어!"; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "트" :
                                result = input.val().slice(0, i+1) + "...레이서 출동!"; 
                                output.text(result);
                                isBreak = true;
                                break;    
                            case "무" :
                                result = input.val().slice(0, i+1) + "...고한 이들을 지키겠습니다."; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "파" :
                                result = input.val().slice(0, i+1) + "...라, 작전 개시!"; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "포" :
                                result = input.val().slice(0, i+1) + "...화 개시!"; 
                                output.text(result);
                                isBreak = true;
                                break;    
                            case "똑" :
                                result = input.val().slice(0, i+1) + "...똑, 메이가 왔어요."; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "동" :
                                result = input.val().slice(0, i+1) + "...쥬 뿌시숴!(Dòng zhù, bù xǔ zǒu!)"; 
                                output.text(result);
                                isBreak = true;
                                break; 
                            case "똥" :
                                result = input.val().slice(0, i+1) + "...쥬 뿌시숴!(Dòng zhù, bù xǔ zǒu!)"; 
                                output.text(result);
                                isBreak = true;
                                break;     
                            case "쀼" :
                                result = input.val().slice(0, i+1) + "↗...쀼↗ 쀼↗쀼↘쀼↗!"; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "삐" :
                                result = input.val().slice(0, i+1) + "→...유↘우↘우↘웃↓!"; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "한" :
                                result = input.val().slice(0, i+1) + "...방이면 충분해."; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "깽" :
                                result = input.val().slice(0, i+1) + "...판 치기 딱 좋은 날씨네!"; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "폭" :
                                result = input.val().slice(0, i+1) + "...탄 받아라!"; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "신" :
                                result = input.val().slice(0, i+1) + "...사 숙녀 여러분! 한 번 달려보자고!"; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "신" :
                                result = input.val().slice(0, i+1) + "...사 숙녀 여러분! 한 번 달려보자고!"; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "토" :
                                result = input.val().slice(0, i+1) + "...르비욘! 작업준비 끝!"; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "초" :
                                result = input.val().slice(0, i+1) + "...초오오↗고오오↗여어어어얼↗ 용↗광↗로오오오오↗!!!"; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "게" :
                                result = input.val().slice(0, i+1) + "...임을 하면 이겨야지!"; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "D" :
                                result = input.val().slice(0, i+1) + "....Va 온라인!"; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "디" :
                                result = input.val().slice(0, i+1) + "....바 온라인!"; 
                                output.text(result);
                                isBreak = true;
                                break;    
                            case "이" :
                                result = input.val().slice(0, i+1) + "....것도 너프해보시지!"; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "시" :
                                isRandom = makeRandom(1, 5);
                                if (isRandom==1 || isRandom==2 || isRandom==3){
                                    result = input.val().slice(0, i+1) + "....스템 정상. D.Va! 출격 준비 완료."; 
                                } else if(isRandom==4 || isRandom==5){
                                    result = input.val().slice(0, i+1) + "....메트라, 보고합니다."; 
                                }
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "라" :
                                result = input.val().slice(0, i+1) + "....인하르트! 대령했소이다."; 
                                output.text(result);
                                isBreak = true;
                                break;  
                            case "망" :
                                result = input.val().slice(0, i+1) + "....치 나가신다!"; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "로" :
                                result = input.val().slice(0, i+1) + "....드호그의 시간이다."; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "상" :
                                result = input.val().slice(0, i+1) + "....상력이야 말로 발견의 어머니입니다."; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "윈" :
                                result = input.val().slice(0, i+1) + "....스턴 보고합니다!"; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "자" :
                                result = input.val().slice(0, i+1) + "....리야. 임무 대기 중."; 
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "루" :
                                result = input.val().slice(0, i+1) + "....시우가 여러분을 찾아갑니다!"; 
                                output.text(result);
                                isBreak = true;
                                break; 
                            case "비" :
                                result = input.val().slice(0, i+1) + "....트에 몸을 맡겨라!"; 
                                output.text(result);
                                isBreak = true;
                                break; 
                            case "오" :
                                isRandom = makeRandom(1, 3);
                                if(isRandom==1){
                                    result = input.val().slice(0, i+1) + "....우, 제대로 놀아보자!"; 
                                } else if(isRandom==2){
                                    result = input.val().slice(0, i+1) + "....늘 당직은 메르시입니다.";
                                }

                                output.text(result);
                                isBreak = true;
                                break;  
                            case "제" :
                                result = input.val().slice(0, i+1) + "....가 여러분을 돌보겠어요."; 
                                output.text(result);
                                isBreak = true;
                                break; 
                            case "영" :
                                isRandom = makeRandom(1, 4);
                                if(isRandom==1){
                                    result = input.val().slice(0, i+1) + "....웅이여, 일어나세요!"; 
                                } else if(isRandom==2){
                                    result = input.val().slice(0, i+1) + "....웅은 죽지 않아요.";
                                } else if(isRandom==3){
                                    result = input.val().slice(0, i+1) + "....웅은 죽지 않아요... 대가를 치를 뿐";
                                }
                                output.text(result);
                                isBreak = true;
                                break;   
                            case "순" :
                                result = input.val().slice(0, i+1) + "....간이동기 가동. 빠르게 움직여요!"; 
                                output.text(result);
                                isBreak = true;   
                            case "젠" :
                                result = input.val().slice(0, i+1) + "....야타가 왔소"; 
                                output.text(result);
                                isBreak = true;   
                            case "진" :
                                result = input.val().slice(0, i+1) + "....정한 자아에는 형체가 없는 법."; 
                                output.text(result);
                                isBreak = true;  
                            case "고" :
                                result = input.val().slice(0, i+1) + "....요를 체험하시오."; 
                                output.text(result);
                                isBreak = true;  
                            case "눈" :
                                result = input.val().slice(0, i+1) + "....동자로 들어가시오."; 
                                output.text(result);
                                isBreak = true;  
                            case "데" :
                                result = input.val().slice(0, i+1) + "....자뷰, 느껴본 적 있어?"; 
                                output.text(result);
                                isBreak = true;                                                                     
                            default : 
                                break;
                        } 
                            
                        if(isBreak){
                            break;
                        }
                }
            };