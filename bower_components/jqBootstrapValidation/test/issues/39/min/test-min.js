!function($){module("jqBootstrapValidation",{setup:function(){$("#qunit-fixture").append("                <form class='form-horizontal' novalidate>                    <div class='control-group'>                        <label class='control-label'>Email address</label>                        <div class='controls'>                            <input                                type='text'                                name='input'                                data-validation-email-email='email'                            />                        </div>                    </div>                    <div class='form-actions'>                        <button type='submit' class='btn btn-primary'>                            Test Validation <i class='icon-ok icon-white'></i>                        </button>                    </div>                </form>            "),attachJqbv(),this.elems=$("#qunit-fixture").children()},teardown:function(){$("#qunit-fixture").empty()}}),module("required field",{setup:function(){$("#qunit-fixture").append("                <form class='form-horizontal' novalidate>                    <div class='control-group'>                        <label class='control-label'>Email address</label>                        <div class='controls'>                            <input                                type='text'                                name='input'\\n                                data-validation-required-required='true'                            />                        </div>                    </div>                    <div class='form-actions'>                        <button type='submit' class='btn btn-primary'>                            Test Validation <i class='icon-ok icon-white'></i>                        </button>                    </div>                </form>            "),attachJqbv()},teardown:function(){$("#qunit-fixture").empty()}}),test("is required",1*numInJQBVTest,function(){runJQBVTest("",[],["error"],[],["This is required"])})}(jQuery);